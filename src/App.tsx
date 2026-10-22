import { useState } from 'react'
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import './App.css'

const languages = [
    { id: 0, label: 'English', value: 'en' },
    { id: 1, label: 'Deutsch', value: 'de' },
    { id: 2, label: 'Español', value: 'es' },
    { id: 3, label: 'Français', value: 'fr' },
    { id: 4, label: 'Italiano', value: 'it' },
    { id: 5, label: 'Türkçe', value: 'tr' },
    { id: 6, label: '日本語', value: 'ja' },
    { id: 7, label: '中文', value: 'zh' }
];

export interface Language {
    id: number;
    label: string;
    value: string;
}

function App() {
    const [languageValue, setLanguageValue] = useState<string>('');
    const [language, setLanguage] = useState<Language | null>(null);

    return (
        <>
            <div className="flex flex-col gap-2 items-start">
                <h2>PrimeReact: Select<br />(selected value is list item field —<br />'options', 'optionLabel', 'optionValue' props are used)</h2>
                <Select.Root
                    value={languageValue}
                    onValueChange={(e: SelectValueChangeEvent) => setLanguageValue(e.value as string)}
                    options={languages}
                    optionLabel="label"
                    optionValue="value"
                    className="w-full md:w-56"
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Select a language" />
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List />
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
                Selected value: '{languageValue}'
            </div>
            <div className="flex flex-col gap-2 items-start mt-8">
                <h2>PrimeReact: Select<br />(selected value is list item —<br />'options', 'optionLabel', 'optionKey' props are used)</h2>
                <Select.Root
                    value={language}
                    onValueChange={(e: SelectValueChangeEvent) => setLanguage(e.value as Language)}
                    options={languages}
                    optionLabel="label"
                    optionKey="id"
                    className="w-full md:w-56"
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Select a language" />
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List />
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
                Selected value: {JSON.stringify(language)}
            </div>
        </>
    );
}

export default App
