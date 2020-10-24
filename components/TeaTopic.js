import React, { useEffect, useState } from "react";
import { Input } from "./Input"
import TeaTopicList from "./TeaTopicList";
import PastTeaTopic from "./PastTeaTopic"


const API_URL = `https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json`;

export function TeaTopic() {
    const [searchTeaTopic, setSearchTeaTopic] = useState([]);
    // const [filterDiscussed, setFilterDiscussed] = useState("");

    const fetchTeaTopic = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setSearchTeaTopic(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchTeaTopic();
    }, []);

    return (
        <>
            <div>
                <Input />
                <h4>NEXT TOPICS</h4>
                {searchTeaTopic.sort((topicA, topicB) => {
                    const ratioA = topicA.upvotes - topicA.downvotes;
                    const ratioB = topicB.upvotes - topicB.downvotes;
                    return ratioB - ratioA;
                }).filter((topic) => !topic.discussedOn).map(topic => {
                    return (
                        <TeaTopicList key={topic.id} topic={topic} />
                    )
                })}
            </div>
            <div>
                <h4>PAST TOPICS</h4>
                {searchTeaTopic.filter(topic => topic.discussedOn).map(topic => {
                    return (
                        <PastTeaTopic key={topic.id} topic={topic} />
                    )
                })}
            </div>
        </>
    )
}