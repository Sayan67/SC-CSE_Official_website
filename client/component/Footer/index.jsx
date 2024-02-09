import styles from '../../styles/Footer.module.css';
import { FacebookLogo, TwitterLogo, InstagramLogo, YoutubeLogo, LinkedinLogo, PaperPlaneTilt, Heart } from '@phosphor-icons/react';

const Footer = () => {
    return (
        <footer>
            <div className={styles.Bg_details}>
                <div className={styles.FooterWrap}>
                    <div className={styles.FooterUpperContent}>
                        <div className={styles.Col1}>
                            <div className={styles.MailUsAt}>
                                Mail us at: 
                                <PaperPlaneTilt size={24} weight="bold" style={{ marginLeft: '0.5em' }} />
                            </div>
                            <strong style={{ color: 'var(--fontColor)' }}>sccse.aot@gmail.com</strong>
                        </div>
                        <div className={styles.Footer_Anchor}>
                            <a href="https://www.facebook.com/sccseaot" aria-label='Way to SCCSE Facebook'>
                                <FacebookLogo size={32} weight="bold" />
                            </a>
                            <a href="https://twitter.com/ieiaot" aria-label='Way to SCCSE Twitter'>
                                <TwitterLogo size={32} weight="bold" />
                            </a>
                            <a href="https://www.instagram.com/sccse_aot/" aria-label='Way to SCCSE Instagram'>
                                <InstagramLogo size={32} weight="bold" />
                            </a>
                            <a href="https://youtube.com/@sccseaot" aria-label='Way to SCCSE Youtube'>
                                <YoutubeLogo size={32} weight="bold" />
                            </a>
                            <a href="https://www.linkedin.com/company/sccseaot/about/" aria-label='Way to SCCSE LinkedIn'>
                                <LinkedinLogo size={32} weight="bold" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.FooterText}>
                        <div className={styles.CopyrightNotice}>
                            © {new Date().getFullYear()} Official Website of IEI Student's
                            Chapter CSE(AOT).
                        </div>
                        <div className={styles.MadeBy}>
                            <div className={styles.MadeBy_Upper}>Created with</div> 
                            <div className={styles.MadeBy_Lower}>
                                <div className={styles.MadeBy_HeartIcon}>
                                    <Heart size='1.5em' display='block' />
                                </div> 
                                by Students' Chapter CSE!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
