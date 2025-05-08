interface ContactLinksProp {
  ariaLabel: string;
  className: string;
  imgURL: string;
  href: string;
}

function ContactLinks({
  ariaLabel,
  className,
  imgURL,
  href,
}: ContactLinksProp) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      <img src={imgURL} alt="instagram" />
    </a>
  );
}

export default ContactLinks;
