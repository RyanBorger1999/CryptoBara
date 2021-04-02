import React from 'react';

class CopyrightFooter extends React.Component {
    render() {
        {
            return(
                <footer className="footer-copyright">
                    &copy; {new Date().getFullYear()} CryptoBara
                </footer>
            );
        }
    }
}
export default CopyrightFooter;