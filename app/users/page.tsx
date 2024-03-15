"use client"

import axios from "axios";
import { useState } from "react";

export default function User() {
    const [name, setName] = useState<string>('');

    async function Submit() {
        try {
            const res = await axios.get(`https://api.github.com/users/${name}`);
            const profile = res.data;

            console.log(profile);

            const response = await axios.get(profile?.repos_url);
            const repoArray = response.data;

            repoArray.sort((a: any, b: any) => b.size - a.size);

            const repos = repoArray.length < 5 ? repoArray : repoArray.slice(0, 5);

            const languages: string[] = [];

            await Promise.all(repos.map(async (repo: any) => {
                const { data } = await axios.get(repo.languages_url);
                const keys = Object.keys(data);
                keys.forEach(ele => {
                    if (!languages.includes(ele)) {
                        languages.push(ele);
                    }
                });
            }));

            console.log(languages);

            const body = {
                userId: profile.id,
                name: profile.name,
                email: "default@gmail.com",
                username: profile.login,
                likes: 0,
                languages: languages,
                bio: profile.bio || "No bio",
                image: profile.avatar_url
            };

            console.log(body);

            const addedUser = await axios.post("/api/addUser", body);
            console.log(addedUser.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-gray-200">
            <input placeholder="Enter username" onChange={(e) => { setName(e.target.value) }} className="rounded-lg p-2" />
            <button onClick={() => Submit()} className="bg-blue-500 p-2 rounded-lg text-white">Submit</button>
        </div>
    );
}
