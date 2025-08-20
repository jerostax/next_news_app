// This file is used to define the layout for the news detail page
// It includes the modal for displaying images and the main content area

export default function NewsDetailLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
