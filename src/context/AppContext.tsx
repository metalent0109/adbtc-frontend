import React from 'react';
import useAds from 'hooks/useAds';
import useAuth from 'hooks/useAuth';
import PropTypes from 'prop-types';


export const AppContext = React.createContext({ 

});

export const AppProvider = ({ children }: { children: any }) => {
    const { ads, createAd, myAds, getAdsCreatedByMe, fundSuccess, fundSatoshi } = useAds();
    const { user, registerUser, loginUser} = useAuth();
    return (
        <AppContext.Provider value={{ ads, createAd, myAds, getAdsCreatedByMe, fundSuccess, fundSatoshi, user, registerUser, loginUser }}>
            { children }
        </AppContext.Provider>
    );
};



export const useProjectsValue = () => React.useContext(AppContext);

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
