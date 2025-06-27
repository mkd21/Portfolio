
export default function SkillsRenderer({id,worksDone})
{

    return (
        <div className="xl:mb-4" >
            {
                worksDone.map( (iter) => <p className={iter.className} > {iter.text} </p>)
            }
        </div>
    );
}