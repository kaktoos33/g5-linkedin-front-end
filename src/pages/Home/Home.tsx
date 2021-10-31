import * as React from 'react';
import { FunctionComponent } from 'react';
import { CreatePost } from './components/CreatePost';
import { UserPost } from './components/UserPost';
import { Post } from './types/Post.type';
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { User } from './types/User.types';
import "./Home.style.scss"
import { GET_POSTS } from "./graphql/query";
import { UserProfile } from "../../components/UserProfile";
import { Follow } from "../../components/Follow";
import { Tag } from "../../components/Tag";




interface HomeProps {

}
const fetechedUser: User =
{
    name: "farzaneh",
    role: "Developer",
    img: "https://picsum.photos/id/1005/40"
}

const fetechedfollowerreq: Array<User> = [
    {
        name: "AmirBahador",
        role: "Devops",
        img: "https://picsum.photos/id/1005/40"
    },
    {
        name: "Mehdi",
        role: "FrontEnd Developer",
        img: ""
    },
    {
        name: "Sina",
        role: "BackEnd Developer",
        img: "https://picsum.photos/id/1005/40"
    },
    {
        name: "Mehrdad",
        role: "SEO",
        img: "https://picsum.photos/id/1005/40"
    },
    {
        name: "Neda",
        role: "Manager",
        img: "https://picsum.photos/id/1005/40"
    },
    {
        name: "Mahour",
        role: "UI/UX Designer",
        img: ""
    }

]
const fetechedPost: Array<Post> = [
    {
        body: {
            text: "طبیعت گردی ...",
            media: "https://picsum.photos/id/1003/516/307",
        },
        likes: 34,
        user: {
            name: "Karim",
            role: "ui/ux",
            img: "https://picsum.photos/id/1/40"
        },
    },
    {
        body: {
            text: "در آخرین کارگاه «با هم یاد بگیریم»، از سجاد احمدی روایت کار با ابزاری شگفت‌انگیز و پر از امکانات ویژه رو شنیدیم که به قول سجاد می‌تونیم با استفاده از اون بی‌نیاز از متخصصان داده، در کسب‌و‌کارمون داده‌ها رو تحلیل کنیم، گزارش‌های مو‌به‌مو بگیریم و با دقتی مثال‌زدنی مقایسه‌های جزیی انجام بدیم."
                +
                "«تبلو» یا همان تابلو؛ ابزاریه که به دیجیتال مارکترها کمک می‌کنه معیارها و سنجه‌های کمپین‌هاشون رو به راحتی آنالیز کنند، به کمک دیتای پاکیزه تصمیم‌های صحیح بگیرن و دغدغه‌ی data-driven بودن رو برطرف می‌کنه. تبلو زیر مجموعه‌ی دیتاساینس قرار می‌گیره و در گروه ابزارهای Self BI دسته‌بندی می‌شه. این ابزار چالش‌های گزارش‌گیری با اکسل رو نداره و کاربران خودش رو از کدنویسی‌های پیچیده بی‌نیاز می‌کنه."
                +
                "در این کارگاه دو ساعته، سجاد رهنماکالجی‌ها رو با این ابزار کارآمد آشنا کرد، ورژن‌ها و امکانات تبلو رو نشون داد و یک نمونه‌ی پیاده‌سازی شده برای شرکت‌کننده‌ها رو مرور کرد."
                +
                "کار با تبلو سر راسته، پیچیدگی ابزارهای آماری رو نداره، ورود دیتا به اون به راحتی درگ و دراپ کردن اتفاق می‌افته و می‌تونه دستیاری هوشمند در زمینه‌ی دیتا آنالیز برای دیجیتال مارکترها باشه.",

            media: "https://picsum.photos/516/307",
        },
        likes: 10,
        user: {
            name: "Yasin",
            role: "Developer",
        },
    },
];


export const Home: FunctionComponent<HomeProps> = () => {
    const user = fetechedUser;
    const posts = React.useMemo(() => fetechedPost.map((a) =>
        <UserPost post={a} status={false} />), [fetechedPost]);
        const followers= fetechedfollowerreq;

    // const { loading, error, data } = useQuery<Array<Post>>(GET_POSTS);

    // const posts = React.useMemo(
    //     () => !loading && data && data.map((a) => <UserPost post={a} />),
    //     [loading, data]
    // );
    return (
        
        <div className="flex justify-center home">
            <div className="w-1/5 max-w-xs ">
                <UserProfile />
                <Follow followers={followers} />
            </div>
            <div className="w-3/5 max-w-xl mx-3.5">
                <CreatePost user={user} />
                {posts}
            </div>
            <div className="w-1/5 max-w-xs">
                <Tag />
            </div>
        </div>
    );
}
