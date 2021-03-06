import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import il8n from '../components/il8n'
import { useTranslation, Trans } from 'react-i18next'

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
}

export default function Home() {
  const { t, i18n } = useTranslation()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>

        <h1>
          <Trans i18nKey="description.part1">
            Why <code>src/App.js</code> and save to reload.
          </Trans>
        </h1>

        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('description.part2')}
        </a>
      </div>
    </div>
  )
}
