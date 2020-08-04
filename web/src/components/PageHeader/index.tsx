import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// Assets
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface PageHeaderProps {
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({children, title}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
        <img src={backIcon} alt="Voltar" />
        </Link>

        <img src={logoImg} alt="Proffy" />
      </div>

      { (children || title) && (
        <div className="header-content">
          { title && (<strong>{title}</strong>) }
          { children && children }
        </div>
      )}
    </header>
  );
}

export default PageHeader;
