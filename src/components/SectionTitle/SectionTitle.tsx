import './SectionTitle.css';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
}

const SectionTitle = ({ subtitle, title, centered = true }: SectionTitleProps) => {
  return (
    <div className={`section-title ${centered ? 'centered' : ''}`}>
      <span className="section-subtitle">{subtitle}</span>
      <h2 className="section-heading">{title}</h2>
    </div>
  );
};

export default SectionTitle;
