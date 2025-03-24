import "./buttonPrimary.css";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  link: string;
  variant?: "fullcolor" | "no-color";
  download?: string;
}

function ButtonPrimary({
  children,
  link,
  download,
  variant = "fullcolor",
}: ButtonPrimaryProps) {
  return (
    <a
      className={`button-primary ${variant}`}
      download={download ? download : ""}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default ButtonPrimary;
