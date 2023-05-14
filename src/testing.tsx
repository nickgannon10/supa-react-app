import { supaClient } from "./supa-client";

interface PostData {
    id: string;
    title: string;
    score: number;
    username: string;
    user_id: string;
}

export function AllPosts() {
    const { session } = useContext(UserContext);
    const { pageNumber } = useParams();
    const [bumper, setBumper] = useState(0);
    const [posts, setPosts] = useState<PostData[]>([]);
    const [myVotes, setMyVotes] = useState<
        Record<string, "up" | "down" | undefined>
    >({});
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        const queryPageNumber = pageNumber ? +pageNumber : 1;
        let { data, error } = await supaClient
            .rpc('get_posts', {
                page_number
            })

        if (error) console.error(error)
        else console.log(data)
    }, [pageNumber, bumper, session?.user]);
    return (
