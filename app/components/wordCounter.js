'use client';

import { useState } from "react";
import Tokenizer from '../tokenizer';

export default function WordCounter() {
  const [input, setInput] = useState("");
  const tokens = Tokenizer.singleton.numberOfTokens(input);

  return (
    <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="min-h-[calc(100vh_-_200px)] grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="flex flex-col pt-12 lg:pb-12 lg:col-span-2">
                    <label for="textarea" className="block font-bold text-sm text-gray-800 flex-shrink-0">Write your prompt here</label>
                    <div className="relative flex-1 mt-4">
                        <textarea
                            id="textarea"
                            className="w-full min-h-[300px] h-full border border-gray-200 rounded-md p-4 pb-6 resize-none"
                            onChange={(e) => setInput(e.target.value)}
                            autoFocus={true}
                            value={input}
                        ></textarea>

                        <div className="absolute bottom-2 right-2 flex items-center text-xs text-gray-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                            </svg>
                            <span className="ml-1">Your prompt is never stored or transmitted through the internet.</span>
                        </div>
                    </div>
                </div>
                <div className="pb-12 lg:pt-20">
                    <div className="bg-white rounded-md border border-gray-200 mt-1 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                        Model
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Number of tokens
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                { Object.keys(tokens).map((key) => (
                                    <tr key={key} className="even:bg-gray-50">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                            {Tokenizer.singleton.availableModels[key]}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {tokens[key]} tokens
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
