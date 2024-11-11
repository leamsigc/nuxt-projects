import { User } from 'better-auth'
import mjml2html from 'mjml'


const options = {
  minify: true
}

export const userVerificationTemplate = async (url: string, user: User) => {

  const htmlOutput = await mjml2html(`
      <mjml>
  <mj-head>
    <mj-attributes>
      <mj-all padding="0px"></mj-all>
      <mj-text font-family="Ubuntu, Helvetica, Arial, sans-serif" padding="0 25px" font-size="13px"></mj-text>
      <mj-section background-color="#ffffff"></mj-section>
      <mj-class name="preheader" color="#000000" font-size="11px"></mj-class>
    </mj-attributes>
    <mj-style inline="inline">a { text-decoration: none!important; color: inherit!important; }</mj-style>
  </mj-head>
  <mj-body background-color="#bedae6">
    <mj-section>
      <mj-column width="100%">
        <mj-image src="https://shadcn-vue-landing-page.vercel.app/hero-image-dark.jpg" alt="header image" padding="0px"></mj-image>
      </mj-column>
    </mj-section>
    <mj-section padding-bottom="20px" padding-top="10px">
      <mj-column>
        <mj-text align="center" padding="10px 25px" font-size="20px" color="#512d0b"><strong>Hey ${user.name}!</strong></mj-text>
        <mj-text align="center" font-size="18px" font-family="Arial">Welcome to NuxtZzle<br /> The base Nuxt 4 project template</mj-text>
        <mj-text align="center" color="#489BDA" font-size="25px" font-family="Arial, sans-serif" font-weight="bold" line-height="35px" padding-top="20px">
          Thank you for signing up!<br />
          <span style="font-size:18px">Get started with NuxtZzle</span>
        </mj-text>
        <mj-button background-color="#8bb420" color="#FFFFFF" href="${url}" align="center" font-family="Arial, sans-serif" padding="20px 0 0 0" font-weight="bold" font-size="16px">
          Verify Your Email Now!
        </mj-button>
        <mj-text align="center" color="#000000" font-size="14px" font-family="Arial, sans-serif" padding-top="40px">Best, <br /> The NuxtZzle Team
          <p></p>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `, options)

  return htmlOutput.html
}