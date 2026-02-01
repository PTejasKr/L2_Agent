"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { useContext, useEffect, useState } from 'react'
import MyAgents from './MyAgents'
import { UserDetailContext } from '@/context/UserDetailContext';
import { useConvex, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function AiAgentTab() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div id="ai-agents" className='px-10 md:px-24 lg:px-32 mt-10 scroll-mt-24'>
            <Tabs defaultValue="myagent" className="w-full">
                <TabsList>
                    <TabsTrigger value="myagent">My Agents</TabsTrigger>
                    <TabsTrigger value="template">Templates</TabsTrigger>
                </TabsList>
                <TabsContent value="myagent"><MyAgents /></TabsContent>
                <TabsContent value="template">Templates</TabsContent>
            </Tabs>
        </div>
    )
}

export default AiAgentTab
