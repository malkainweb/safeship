import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.PUBLIC_EMAIL_ID,
    pass: process.env.PUBLIC_EMAIL_ID_KEY,
  },
});

export async function POST(req: Request) {
  const { email, order } = await req.json();

  try {
    await transporter.sendMail({
      from: `"SafeShip" <${process.env.PUBLIC_EMAIL_ID}>`,
      to: "support@safeship.io",
      subject: `New Claim — Order #${order}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin: 0; padding: 0; background-color: #f5f7fd; font-family: Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(25,58,128,0.08);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #193A80; padding: 36px 48px;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                          SafeShip
                        </h1>
                        <p style="margin: 8px 0 0; color: rgba(255,255,255,0.7); font-size: 14px;">
                          Package Protection
                        </p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding: 48px;">
                        <p style="margin: 0 0 8px; color: #193A80; font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">
                          New Claim Received
                        </p>
                        <h2 style="margin: 0 0 32px; color: #1E2022; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                          Order #${order}
                        </h2>

                        <!-- Divider -->
                        <div style="height: 1px; background-color: #E8ECF4; margin-bottom: 32px;"></div>

                        <!-- Details -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <p style="margin: 0 0 4px; color: #8492A6; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;">
                                Customer Email
                              </p>
                              <p style="margin: 0; color: #1E2022; font-size: 16px;">
                                ${email}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <p style="margin: 0 0 4px; color: #8492A6; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;">
                                Order Number
                              </p>
                              <p style="margin: 0; color: #1E2022; font-size: 16px;">
                                #${order}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p style="margin: 0 0 4px; color: #8492A6; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;">
                                Submitted At
                              </p>
                              <p style="margin: 0; color: #1E2022; font-size: 16px;">
                                ${new Date().toLocaleString("en-US", {
                                  dateStyle: "long",
                                  timeStyle: "short",
                                })}
                              </p>
                            </td>
                          </tr>
                        </table>

                        <!-- Divider -->
                        <div style="height: 1px; background-color: #E8ECF4; margin: 32px 0;"></div>

                        <!-- CTA -->
                        
                          href="mailto:${email}"
                          style="display: inline-block; background-color: #193A80; color: #ffffff; font-size: 14px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; text-decoration: none; padding: 14px 32px; border-radius: 100px;"
                        >
                          Reply to Customer
                        </a>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #F5F7FD; padding: 24px 48px;">
                        <p style="margin: 0; color: #8492A6; font-size: 12px; text-align: center;">
                          © SafeShip ${new Date().getFullYear()}. All rights reserved. &nbsp;·&nbsp;
                          <a href="mailto:support@safeship.io" style="color: #193A80; text-decoration: none;">
                            support@safeship.io
                          </a>
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
