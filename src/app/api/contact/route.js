import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { name, email, message } = await request.json()

  await resend.emails.send({
    from: 'noreply@contact.davitprado.com',
    to: 'davitprado@outlook.com',
    replyTo: email,
    subject: `✉️ New message from ${name}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden">
        <div style="background:#10b981;padding:28px 32px">
          <p style="margin:0;font-size:13px;color:#d1fae5;letter-spacing:.05em;text-transform:uppercase">Portfolio contact</p>
          <h1 style="margin:6px 0 0;font-size:22px;color:#fff">${name}</h1>
        </div>
        <div style="padding:28px 32px;background:#fff">
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:90px">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:14px;font-weight:500">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#64748b;font-size:13px">Email</td>
              <td style="padding:10px 0;font-size:14px">
                <a href="mailto:${email}" style="color:#10b981;text-decoration:none">${email}</a>
              </td>
            </tr>
          </table>
          <p style="margin:0 0 8px;font-size:13px;color:#64748b;text-transform:uppercase;letter-spacing:.05em">Message</p>
          <div style="background:#f8fafc;border-left:3px solid #10b981;border-radius:0 8px 8px 0;padding:16px 20px;color:#1e293b;font-size:14px;line-height:1.7;white-space:pre-wrap">${message}</div>
        </div>
        <div style="padding:16px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#94a3b8">
          Sent from your portfolio at davitprado.com
        </div>
      </div>
    `,
    text: `New message from ${name} <${email}>\n\n${message}`,
  })

  return Response.json({ ok: true })
}
