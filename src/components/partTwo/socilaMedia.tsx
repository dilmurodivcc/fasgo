import tg from '/public/icons/tg.svg';
import insta from '/public/icons/insta.svg';
import facebooks from '/public/icons/facebooks.svg';
import { motion, easeOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const socials = [
  {
    icon: tg,
    title: 'Telegram',
    desc: 'fasgo.app',
  },
  {
    icon: insta,
    title: 'Instagram',
    desc: 'fasgo_official',
  },
  {
    icon: facebooks,
    title: 'Facebook',
    desc: 'fasgo.app',
  },
];

const SocialMedia = () => {
  const { t } = useTranslation();
  return (
    <section className="SocialMediaSec container">
      <h1 className="HeroTitle">{t('social_media.title')}</h1>
      <div className="SocialMediBox">
        {socials.map((s, i) => (
          <motion.div
            className="SocilmediaBox_socialMedia"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 * i, ease: easeOut }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <a href="@fasgo.app">
              <img src={s.icon} alt="" />
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;
