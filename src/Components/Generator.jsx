import React from 'react';
import featureimage from '../images/landing_page.png';
import featureimage1 from '../images/output.png';


function Generator() {
    return (
        <div className='bgfeatures'>
            <div className='f-heading'>
                <h1>Generator</h1>
                <p> here are some features of the software</p>
            </div>

            <div className='features'>
                <div className='featuresall'>
                    <img src={featureimage} alt='feature-image' width='300' height='300'/>
                </div>
                <div className='featuresalls'>
                    <img src={featureimage1} alt='feature-image' width='300' height='300'/>
                </div>
            </div>
            <div className='features-text'>
                <h2>Features</h2>
                <h3>This Application<span>Software</span> is Art</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique illum sapiente expedita blanditiis totam possimus pariatur perferendis libero nesciunt beatae nisi, esse quasi maiores, commodi accusamus veniam doloremque ea? Voluptatem saepe repudiandae omnis cum cumque impedit iusto repellendus consequatur.</p>
                <button>view more features</button>
            </div>
        </div>
        
    )
}
export default Generator;