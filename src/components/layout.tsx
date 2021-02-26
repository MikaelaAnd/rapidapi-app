import Header from './header';
import Main from './main';
import Footer from './footer';
import { ChangeEvent, Component } from 'react';

interface Props {
   onChange: (value: string) => void;
}
interface State {
   value: string;
}
class Layout extends Component<Props, State> {
   state: State = { value: '' }
   

   handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      this.setState({ value: event.target.value })
   }

   componentDidUpdate(_: Props) {
      const { onChange } = this.props;
      onChange(this.state.value)
   }
   

   render() {
      return (
         <div>
            <input 
               placeholder="Search for cocktails"
               value={this.state.value}
               onChange={this.handleChange}
            />
   
            <Header />
            <Main />
            <Footer />
         </div>
      );
   }
}

export default Layout;
