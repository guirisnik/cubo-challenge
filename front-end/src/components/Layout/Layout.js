import React from 'react'
import { string, node, array } from 'prop-types'
import { Helmet } from 'react-helmet'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18n from 'src/i18n'
import { LeadFormWrapper } from 'components/LeadFormWrapper'
import { toPrefixUrl } from 'utils/toPrefixUrl'
import { ImportFonts } from 'components/ImportFonts'

const Layout = ({ pageName, selectedStep, children, fonts }) => {
  const { t } = useTranslation(['commons'])
  const lang = i18n.languages[0] || 'pt-BR'

  return (
    <I18nextProvider i18n={i18n}>
      <Helmet
        title={pageName}
        titleTemplate={t('headings.company_name')}
        htmlAttributes={{ lang }}
      />
      <ImportFonts fonts={fonts.map(toPrefixUrl)} />
      <LeadFormWrapper selectedStep={selectedStep}>{children}</LeadFormWrapper>
    </I18nextProvider>
  )
}

Layout.propTypes = {
  pageName: string.isRequired,
  selectedStep: string.isRequired,
  fonts: array.isRequired,
  children: node,
}

export { Layout }
