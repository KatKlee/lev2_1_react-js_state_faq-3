import './Expand.css'
import FaqItem from './FaqItem'
import faq from './data'

const Expand = () => {
    return (
        <>
            {faq.map((elt) =>
                <FaqItem
                    question={elt.question}
                    answer={elt.answer}
                    answerLong={elt.answerLong}
                />
            )
            }
        </>
    )

}
export default Expand