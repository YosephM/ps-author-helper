export declare function greet(name: string): string;
export declare function getAuthorContactInfo(): AuthorInfo;
export declare function getModuleName(moduleNumber: number): "Introduction to My Course" | "Declaration File Fundamentals" | "Building a Declaration File" | "Publishing Your Own Library" | "No such module exists";
export declare class AuthorInfo {
    firstName: string;
    lastName: string;
    twitterHandle: string;
    constructor(firstName: string, lastName: string, twitterHandle: string);
}
