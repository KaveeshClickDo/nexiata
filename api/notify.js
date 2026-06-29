export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body ?? {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return res.status(500).json({ error: 'Service unavailable' });
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from:     'NEXIATA <hello@nexiata.com>',
        to:      [
          'hello@nexiata.com',
          'khsenevirathne@gmail.com',
          'thenexiata@gmail.com',
        ],
        subject: 'NEXIATA: New launch subscriber',
        html:    `<p>New subscriber signed up for the NEXIATA launch:</p><p><strong>${email}</strong></p>`,
        reply_to: email,
      }),
    });

    if (!r.ok) {
      const body = await r.json().catch(() => ({}));
      console.error('Resend API error:', body);
      return res.status(502).json({ error: 'Notification failed' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Notify handler error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
