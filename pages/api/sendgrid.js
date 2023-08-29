import sgMail from "@sendgrid/mail";

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'barbara@laescondida.com.ar', // Cambia al destinatario que corresponda
    from: 'test@example.com', // Cambia al remitente verificado que corresponda
    subject: 'Enviar con SendGrid es divertido',
    text: 'y fácil de hacer en cualquier lugar, incluso con Node.js',
    html: '<strong>y fácil de hacer en cualquier lugar, incluso con Node.js</strong>',
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("Correo electrónico enviado con éxito.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al enviar el correo electrónico.");
  }
};
