import React from 'react';
class Module extends React.Component{
    render(){
        /*
        const modLayout={
            padding: "100px",
            flexWrap: "wrap",
            flexDirection: "column",
            height: "100%",
            listStyleType: "none",
            display: "flex",
            justifyContent: "spaceBetween",
            alignItems: "flex-start"
        };
        const SmallerItems={
            width: "33%",
            height: "200px",
            marginBottom: "10px",
            flex: "1",
            padding: "10px",
            order: this.props.order
        }
        const LargerItem={
            flex: "0 0 100%",
            width: "50%"
        }
        */
        const MainBox={
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "50vw",
            listStyleType: "none",
            padding: "10px"
          };

          const boxa={
            paddingTop:"100px",
            flex: "0 0 100%",
            width: "50%"
            
          };

          const boxb={
            background: "orange",
            flex: "0 0 50%",
            height: "25vw",
            width: "50%"
          };

          const boxc={
            background: "lightgreen",
            flex: "0 0 50%",
            height: "25vw",
            width: "50%"
          };
         

        return(
            <div style={MainBox}>
               <div style={boxc}>
                   {this.props.title}
               </div>
               <div style={boxb} >
                    {this.props.description}
               </div>
               <div style={boxa}>
                    <img className="ModImage" src="https://i.ibb.co/XW29C39/Adult-capybara.jpg"></img>
               </div>
               
            </div>
        );
    }
}
export default Module;
