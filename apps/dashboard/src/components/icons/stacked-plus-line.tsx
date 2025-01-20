import React from 'react';

export function StackedPlusLine(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12" {...props}>
      <g fill="currentColor" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <path d="M4.695 1.328h3.61c.57 0 1.027 0 1.396.03.38.031.708.096 1.01.25.483.246.877.64 1.123 1.123.154.302.22.63.25 1.01.03.37.03.826.03 1.397v1.804a.471.471 0 1 1-.943 0V5.158c0-.596 0-1.014-.027-1.34-.026-.321-.075-.512-.15-.659a1.627 1.627 0 0 0-.711-.71c-.147-.076-.338-.125-.658-.151-.327-.027-.745-.027-1.34-.027h-3.57c-.595 0-1.013 0-1.34.027-.32.026-.51.075-.658.15a1.628 1.628 0 0 0-.711.711c-.075.147-.124.338-.15.659-.027.326-.027.744-.027 1.34v1.854c0 .596 0 1.014.027 1.34.026.321.075.512.15.659.156.306.405.555.711.71.147.076.338.125.658.151.327.027.745.027 1.34.027H6.5a.471.471 0 1 1 0 .943H4.695c-.57 0-1.027 0-1.396-.03-.38-.03-.708-.096-1.01-.25a2.57 2.57 0 0 1-1.123-1.123c-.154-.302-.22-.63-.25-1.01-.03-.37-.03-.826-.03-1.396V5.137c0-.57 0-1.027.03-1.396.03-.38.096-.708.25-1.01a2.57 2.57 0 0 1 1.123-1.123c.302-.154.63-.219 1.01-.25.369-.03.826-.03 1.396-.03Z" />
        <path d="M12.114 4.654c0 .26-.21.471-.471.471H1.357a.471.471 0 1 1 0-.943h10.286c.26 0 .471.211.471.472ZM7.357 7.988h-6a.471.471 0 1 1 0-.943h6a.471.471 0 0 1 0 .943ZM7.743 9.299c0-.26.21-.472.471-.472h3a.471.471 0 1 1 0 .943h-3a.471.471 0 0 1-.471-.471Z" />
        <path d="M9.714 11.27a.471.471 0 0 1-.471-.471v-3a.471.471 0 0 1 .943 0v3c0 .26-.211.471-.472.471Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="transparent" d="M.5-.001h12v12.857H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
}