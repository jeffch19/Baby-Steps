import { useQuery } from '@apollo/client';
import { GET_USER_AND_JOURNAL } from "../graphql/queries";

function JournalView() {
    const{loading, data} = useQuery(GET_USER_AND_JOURNAL,)

    console.log(data)

    const journals = data?.user.journel || [];

    return (
        <>
            {journals.map( journal => (
                <h3>{journal.title}</h3>
            ))}
        </>
    )
}

export default JournalView