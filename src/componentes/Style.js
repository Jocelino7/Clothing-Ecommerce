import styled from "styled-components"


export const genericStyle = styled.div`

    width:${({ width }) => width ? width : "100%"} ;
    height:${({ height }) => height ? height : "auto"};
    background-color:${({ background }) => background ? background : "none"};
    color:${({ color }) => color};
    box-shadow: ${({ shadow }) => shadow ? shadow : "0"} ;
    border: ${({ border }) => border ? border : "none"} ;
    grid-column: ${({ gridColumn }) => gridColumn ? gridColumn : ""};
    grid-row: ${({ gridRow }) => gridRow ? gridRow : ""};
    @media screen and (min-width:${({ screen }) => screen ? screen : "600px"}) {

        width:${({ widthScreen }) => widthScreen} ;
        height:${({ heightScreen }) => heightScreen} ;
        background-color:${({ backgroundScreen }) => backgroundScreen};
        color:${({ colorScreen }) => colorScreen} ;
        box-shadow: ${({ shadowScreen }) => shadowScreen ? shadowScreen : "0"} ;
        border: ${({ borderScreen }) => borderScreen ? borderScreen : "none"}  ;
        grid-column: ${({ gridColumnScreen }) => gridColumnScreen ? gridColumnScreen : ""} ;
        grid-row: ${({ gridRowScreen }) => gridRowScreen ? gridRowScreen : ""} ;

        
    };

`


export const Nav = styled.nav`

    display:flex;
    flex-direction: column;
    background-color: ${({ background }) => background ? background : "inherit"};
    color:${({ color }) => color};
    justify-content: ${({ justifyContent }) => justifyContent};
    @media screen and (min-width:600px) {
        justify-content: space-between;
        flex-direction: row;
        
        
    }

`
export const NavMenu = styled.button`
    background-color: ${({ background }) => background ? background : "inherit"};
    border:${({ border }) => border ? border : "none"};
    max-width: 48px;
    color:${({ color }) => color};
    width: 40px;
    height: 40px;
    padding:${({ padding }) => padding};
    
    *{
        color: inherit;
        background-color: inherit;
        width: inherit;
        height: inherit;
    }

    @media screen and (min-width:600px) {
        display: none;
        
    }

`
export const NavLinks = styled.div`
    display:${({ hide }) => hide ? "none" : "flex"};
    flex-direction: column;
    padding: 1rem;
    background-color: ${({ background }) => background ? background : "inherit"};
    animation-duration:1s;
    animation-delay: 0s;
    animation-name: navBar;
    justify-content: ${({ justifyContent }) => justifyContent};
    margin: ${({ margin }) => margin};
    a{
        text-decoration: none;
        margin: 1rem 0;
        color:  ${({ color }) => color ? color : "inherit"} ;
    }
    @media screen and (min-width:600px) {
        flex-direction: row;
        animation-name:none ;
        display: flex;
        a{
            margin: 0 1rem;
        }
        
    }

    @keyframes navBar {
        from{
            transform: translateX(-1000px);
        }
        to{
            transform: translateX(0);
        }
        
    }

   

`

export const FlexContainer = styled.div`

    display: flex;
    flex-direction: ${({ direction }) => direction};
    margin: 0  ${({ spacing }) => spacing};

`

export const Split = styled.div`
    display: flex;
    justify-content: space-between;
    

`
export const Image = styled.img`

    display: block;
    width:${({ widthSm }) => widthSm ? widthSm : "100%"} ;
    height:${({ heightSm }) => heightSm ? heightSm : "auto"};
    max-width: ${({ maxWidthSm }) => maxWidthSm ? maxWidthSm : ""};
    max-height: ${({ maxHeightSm }) => maxHeightSm ? maxHeightSm : ""};
    object-fit: ${({ objectFit }) => objectFit ? objectFit : "cover"};
    object-position:${({ objectPosition }) => objectPosition ? objectPosition : ""};
    margin-top: ${({mTSm}) => mTSm};
    margin-bottom: ${({mBSm}) => mBSm};
    margin:${({mSm}) => mSm};
    position:relative;
   
   
   
`

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: ${({ flexDirectionSm }) => flexDirectionSm};
    gap:${({ gapSm }) => gapSm};
    justify-content: ${({ justifyContentSm }) => justifyContentSm};
    align-items: ${({alignItemsSm}) => alignItemsSm};
    flex-grow: ${({flexGrowSm}) => flexGrowSm} ;
    flex-basis: ${({flexBasisSm}) => flexBasisSm} ;
    margin-top: ${({mTSm}) => mTSm};
    margin-bottom: ${({mBSm}) => mBSm};
    padding-bottom: ${({pBSm}) => pBSm};
    padding-top: ${({pTSm}) => pTSm};
    padding: ${({pSm}) => pSm?pSm:"0"};
    margin:${({mSm}) => mSm};
    width:${({ widthSm }) => widthSm ? widthSm : "100%"} ;
    height:${({ heightSm }) => heightSm ? heightSm : "auto"};
    max-width: ${({ maxWidthSm }) => maxWidthSm ? maxWidthSm : ""};
    max-height: ${({ maxHeightSm }) => maxHeightSm ? maxHeightSm : ""};

    @media screen and (min-width:800px) {
        
        display: flex;
        flex-direction: row;
        
    };
   



`
export const Text = styled.p`
    font-weight:${({ fontWeight }) => fontWeight ? fontWeight : "normal"};
    font-size:${({ fontSize }) => fontSize ? fontSize : "1rem"};
    text-align: ${({ textAlign }) => textAlign};
    margin-top: ${({ mt }) => mt};
 
`
export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(${({ fr }) => fr},1fr);
    grid-auto-rows: ${({ gridHeight }) => gridHeight};
    grid-gap:0.5rem ;
   
    @media screen and (min-width:${({ screen }) => screen ? screen : "600px"})  {
        grid-template-columns: repeat(${({ desktopFr }) => desktopFr},1fr);
        grid-template-rows: ${({ templateRows }) => templateRows};
        grid-auto-rows: ${({ autoRowScreen }) => autoRowScreen};
        
    }

`

export const Button = styled.button`
    width:${({ width }) => width ? width : ""} ;
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : ""};
    padding: 0.6rem;
    border-radius: 0.2rem;
    height:${({ height }) => height ? height : ""};
    background-color:${({ background }) => background ? background : "none"};
    color:${({ color }) => color};
    box-shadow: ${({ shadow }) => shadow ? shadow : "0"} ;
    border: ${({ border }) => border ? border : "none"} ;
    
`

export const Circle = styled.div`
    border-radius: 50%;

`
export const Align = styled.div`
    display:grid;
    justify-items: ${({ horizontal }) => horizontal ? horizontal : "center"};
    align-content: ${({ vertical }) => vertical ? vertical : "center"};

`

export const Row = styled.div`

    display: flex;
    gap: 1rem;

`




