import template from './templates/page.jsx';

var defaultProps = {
    lang: 'en',
    charSet: 'utf-8',
    scripts: [],
    stylesheets: []
};

class Page {
    render(){
        return template(this.props);
    }
}
Page.defaultProps = defaultProps;

export default Page;
