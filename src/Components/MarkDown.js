export default function MarkDown(props){

    const handleChange = (e) => {
        return props.onMarkdownChange(e.target.value);
    }

    return(
        <div className="markdown">
            <textarea value={props.markdown} onChange={handleChange}>

            </textarea>
        </div>
    );
}