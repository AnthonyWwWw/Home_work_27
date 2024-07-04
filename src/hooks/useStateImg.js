import { useEffect, useState } from 'react'
import { getImageUrl } from '../feature/URLutility/utility'

export function useStateImg() {
    const [logoState, useLogoState] =  useState();
    const logoName = 'logo-no-background.svg';

    useEffect(() => {
        useLogoState(getImageUrl(logoName));
    })

    return{
        logoState,
    };
};

