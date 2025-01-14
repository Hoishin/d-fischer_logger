import type { LogLevel } from './LogLevel';

export interface Logger {
	log: (level: LogLevel, message: string) => void;

	// convenience
	crit: (message: string) => void;
	error: (message: string) => void;
	warn: (message: string) => void;
	info: (message: string) => void;
	debug: (message: string) => void;
	trace: (message: string) => void;
}
