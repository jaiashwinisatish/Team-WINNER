import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, User, Bot, Globe } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/doctor';
import { Card } from '@/components/ui/chart';

export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  sources?: string[];
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex gap-3', isUser ? 'flex-row-reverse' : 'flex-row')}>
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarFallback className={cn(
          'text-xs',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
        )}>
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </AvatarFallback>
      </Avatar>
      <div className={cn('flex flex-col max-w-[85%] gap-2', isUser ? 'items-end' : 'items-start')}>
        <Card className={cn(
          'p-4 text-sm leading-relaxed shadow-sm',
          isUser ? 'bg-primary text-white border-primary' : 'bg-white text-foreground'
        )}>
          {message.content}
        </Card>

        {message.sources && message.sources.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {message.sources.map((source, idx) => (
              <a
                key={idx}
                href={source}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-secondary text-primary hover:bg-primary/10 transition-colors border border-primary/20"
              >
                <Globe className="h-3 w-3" />
                Wikipedia Reference {idx + 1}
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
