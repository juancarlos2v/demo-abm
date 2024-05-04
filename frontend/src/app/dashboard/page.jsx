import Navigation from "@components/Navigation";
import Content from "@layouts/Content";
import { ContentProvider } from "../context/ContentContext";

export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
}

const page = () => {
    return (

        <ContentProvider>
            <Navigation />
            <Content />
        </ContentProvider>

    )
}

export default page