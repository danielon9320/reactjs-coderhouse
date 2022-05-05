import { css } from '@emotion/react'
import PuffLoader from 'react-spinners/PuffLoader'
import './LoaderSecondary.css'

const LoaderSecondary = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
`;

    return (
        <>
            <div className="loaderSecondaryContainerMobile">
                <PuffLoader color='#dc3545' css={override} size={150} />
            </div>
            <div className="loaderSecondaryContainer">
                <PuffLoader color='#dc3545' css={override} size={150} />
            </div>
        </>
    )
}

export default LoaderSecondary