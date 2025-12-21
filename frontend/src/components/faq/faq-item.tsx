import { IFaq } from "@/types/faq-d-t"

type IProps = {
    item: IFaq;
    style_2?: boolean;
}
export default function FaqItem({ item, style_2 = false }: IProps) {
    const { id, title, content, target, isExpanded,parentId='general_faqaccordion' } = item || {}
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`faq-${id}`}>
                <button
                    className={`accordion-button tp-faq-btn ${isExpanded ? '' : 'collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${target}`}
                    aria-expanded={isExpanded}
                    aria-controls={target}
                >
                    {!style_2 && title}
                    {style_2 && (
                        <>
                            <span className="tp-faq-number">{id <= 9 ? `0${id}` : id}</span>
                            <span className="tp-faq-title">{title}</span>
                        </>
                    )}
                    <span className="accordion-btn"></span>
                </button>
            </h2>
            <div
                id={target}
                className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
                aria-labelledby={`faq-${id}`}
                data-bs-parent={`#${parentId}`}
            >
                <div className="accordion-body tp-faq-details-para">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
