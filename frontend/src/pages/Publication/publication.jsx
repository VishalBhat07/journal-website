import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Guidelines/AuthorGuidelines.css";
import publication from "../Publication/publication.json"; // Adjust the import path as necessary

const Publication = () => {
    const createAccordion = (data, parentId) => {
        return data.map((item, index) => (
            <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${parentId}${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${parentId}${index}`}
                    >
                        <strong>{item.title}</strong>
                    </button>
                </h2>
                <div
                    id={`collapse${parentId}${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent={`#${parentId}`}
                >
                    <div className="accordion-body">
                        {item.content.map((contentItem, contentIndex) => {
                            if (contentItem.type === 'text') {
                                return <p key={contentIndex}>{contentItem.value}</p>;
                            } else if (contentItem.type === 'list') {
                                return (
                                    <ul key={contentIndex}>
                                        {contentItem.value.map((listItem, listIndex) => (
                                            <li key={listIndex}>{listItem}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="author-guidelines" style={{ padding: '20px' }}>
            <h3>Publication Process</h3>
            <div className="accordion" id="publicationAccordion">
                {createAccordion(publication, "publication")}
            </div>
        </div>
    );
};

export default Publication;
