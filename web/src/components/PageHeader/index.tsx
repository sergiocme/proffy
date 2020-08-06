import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// Assets
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface PageHeaderProps {
  title?: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, title, description }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
        <img src={backIcon} alt="Voltar" />
        </Link>

        <img src={logoImg} alt="Proffy" />
      </div>

      { (children || title || (title && description)) && (
        <div className="header-content">
          { title && (<strong>{title}</strong>) }
          { description && (<p>{description}</p>) }
          { children && children }
        </div>
      )}
    </header>
  );
}

export default PageHeader;
