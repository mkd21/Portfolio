
export default function SkillsRenderer({worksDone})
{
    return (
        <div>
            {
                worksDone.map( (iter) => <p className={iter.className} > {iter.text} </p>)
            }
        </div>
    );
}