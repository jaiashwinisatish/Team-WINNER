'use client';

import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage, Message } from '@/components/wiki-agent/chat-message';
import { cn } from '@/lib/utils';

interface ChatContainerProps {
    messages: Message[];
    className?: string;
}

export function ChatContainer({ messages, className }: ChatContainerProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <ScrollArea className={cn('flex-1 p-4', className)}>
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                        <p className="text-lg font-medium">Ask WikiAgent a question</p>
                        <p className="text-sm">Get factual answers powered by Wikipedia</p>
                    </div>
                ) : (
                    messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))
                )}
                <div ref={bottomRef} />
            </div>
        </ScrollArea>
    );
}