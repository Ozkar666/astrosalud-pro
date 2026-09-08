// Cloudflare Worker - Mercado Pago Payment Processing
// Deploy with: npx wrangler deploy

export default {
  async fetch(request, env) {
    // CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    try {
      const { token, paymentMethodId, installments, amount, email, name, cpf, phone } = await request.json();

      // Validate required fields
      if (!token || !email || !amount) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }

      // Create payment with Mercado Pago API
      const mpResponse = await fetch('https://api.mercadopago.com/v1/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.MP_ACCESS_TOKEN}`,
          'X-Idempotency-Key': crypto.randomUUID(),
        },
        body: JSON.stringify({
          transaction_amount: parseFloat(amount),
          token: token,
          description: 'AstroSalud Pro - Informe de Tránsitos (1 mes)',
          installments: parseInt(installments),
          payment_method_id: paymentMethodId,
          payer: {
            email: email,
            first_name: name.split(' ')[0],
            last_name: name.split(' ').slice(1).join(' '),
            identification: {
              type: 'CPF',
              number: cpf ? cpf.replace(/\D/g, '') : '',
            },
            phone: {
              area_code: phone ? phone.replace(/\D/g, '').slice(0, 2) : '',
              number: phone ? phone.replace(/\D/g, '').slice(2) : '',
            },
          },
          metadata: {
            service: 'transit-report',
            period: '1-month',
          },
        }),
      });

      const paymentResult = await mpResponse.json();

      if (mpResponse.ok) {
        return new Response(JSON.stringify({
          status: paymentResult.status,
          id: paymentResult.id,
          status_detail: paymentResult.status_detail,
        }), {
          status: 200,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      } else {
        return new Response(JSON.stringify({
          error: paymentResult.message || 'Payment failed',
          status: paymentResult.status,
          status_detail: paymentResult.status_detail,
        }), {
          status: mpResponse.status,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }
  },
};