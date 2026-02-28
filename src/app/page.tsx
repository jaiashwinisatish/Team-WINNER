'use client';

import React, { useState, FormEvent } from 'react';
import { ChatContainer } from '@/components/wiki-agent/chat-container';
import { Message } from '@/components/wiki-agent/chat-message';
import { Send, Globe } from 'lucide-react';

export default function WikiAgentPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: 'user',
            content: input.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // TODO: Phase 3 will connect this to the Genkit AI flow
        // For now, add a placeholder response
        const assistantMessage: Message = {
            id: crypto.randomUUID(),
            role: 'assistant',
            content: 'WikiAgent is being connected to the AI backend. This will be functional after Phase 3.',
        };

        setTimeout(() => {
            setMessages((prev) => [...prev, assistantMessage]);
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className="flex flex-col h-screen bg-background">
            {/* Header */}
            <header className="flex items-center gap-3 px-6 py-4 border-b bg-card">
                <Globe className="h-6 w-6 text-primary" />
                <div>
                    <h1 className="text-xl font-semibold text-foreground">WikiAgent</h1>
                    <p className="text-xs text-muted-foreground">AI-Powered Wikipedia Assistant</p>
                </div>
            </header>

            {/* Chat Area */}
            <ChatContainer messages={messages} className="flex-1" />

            {/* Input Area */}
            <div className="border-t bg-card p-4">
                <form onSubmit={handleSubmit} className="flex gap-2 max-w-3xl mx-auto">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a question about anything..."
                        className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </form>
            </div>
        </div>
    );
}