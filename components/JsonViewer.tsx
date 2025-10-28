
import React, { useState } from 'react';
import { ChevronRightIcon } from './icons';

interface JsonViewerProps {
    data: any;
    baseData: any;
}

const isObject = (val: any): val is object => typeof val === 'object' && val !== null;
const isArray = Array.isArray;

const deepEqual = (a: any, b: any): boolean => {
    if (a === b) return true;
    if (!isObject(a) || !isObject(b)) return false;
    if (isArray(a) && isArray(b)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    }
    if (isArray(a) !== isArray(b)) return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!keysB.includes(key) || !deepEqual((a as any)[key], (b as any)[key])) {
            return false;
        }
    }
    return true;
};

type DiffStatus = 'added' | 'removed' | 'changed' | 'unchanged';

const JsonNode: React.FC<{ nodeKey: string; value: any; baseValue: any; level: number }> = ({ nodeKey, value, baseValue, level }) => {
    const [isCollapsed, setIsCollapsed] = useState(level > 1);

    let status: DiffStatus = 'unchanged';
    if (value === undefined) {
        status = 'removed';
    } else if (baseValue === undefined) {
        status = 'added';
    } else if (!deepEqual(value, baseValue)) {
        status = 'changed';
    }

    const displayValue = status === 'removed' ? baseValue : value;
    const hasChildren = isObject(displayValue) && Object.keys(displayValue).length > 0;
    const isNodeObject = isObject(displayValue);

    const toggleCollapse = () => {
        if (hasChildren) setIsCollapsed(!isCollapsed);
    };

    const renderPrimitive = (val: any) => {
        const valueClass = 
            status === 'changed' && !isObject(val)
                ? 'bg-yellow-500/20 rounded px-1'
                : '';
        if (typeof val === 'string') return <span className={`text-green-400 ${valueClass}`}>"{val}"</span>;
        if (typeof val === 'number') return <span className={`text-blue-400 ${valueClass}`}>{val}</span>;
        if (typeof val === 'boolean') return <span className={`text-purple-400 ${valueClass}`}>{val.toString()}</span>;
        if (val === null) return <span className={`text-gray-500 ${valueClass}`}>null</span>;
        return null;
    };

    const getValuePreview = () => {
        if (isArray(displayValue)) return <span className="text-gray-500 ml-1">Array[{displayValue.length}]</span>;
        if (isNodeObject) return <span className="text-gray-500 ml-1">{`{...}`}</span>;
        return null;
    };
    
    const containerClass = {
        added: 'bg-green-500/10',
        removed: 'bg-red-500/10 text-gray-500 line-through',
        changed: '',
        unchanged: ''
    }[status];

    const allKeys = isNodeObject ? [...new Set([...Object.keys(value || {}), ...Object.keys(baseValue || {})])] : [];

    return (
        <div className={containerClass} style={{ paddingLeft: `${level * 1.5}rem` }}>
            <div className="flex items-start py-0.5">
                <div onClick={toggleCollapse} className={`flex items-center ${hasChildren ? 'cursor-pointer select-none' : ''}`}>
                    {hasChildren && <ChevronRightIcon className={`w-4 h-4 text-gray-500 mr-1 flex-shrink-0 transition-transform ${isCollapsed ? '' : 'rotate-90'}`} />}
                    <span className="text-orange-300">"{nodeKey}"</span>
                    <span className="text-brand-text-muted mx-1">:</span>
                    {isNodeObject ? (
                        isCollapsed ? getValuePreview() : (isArray(displayValue) ? '[' : '{')
                    ) : (
                        <span className="ml-1">{renderPrimitive(displayValue)}</span>
                    )}
                </div>
            </div>
            {isNodeObject && !isCollapsed && hasChildren && (
                <>
                    {allKeys.map((key) => (
                        <JsonNode 
                            key={key} 
                            nodeKey={key} 
                            value={(value as any)?.[key]} 
                            baseValue={(baseValue as any)?.[key]} 
                            level={level + 1} 
                        />
                    ))}
                    <div style={{ paddingLeft: `${level * 1.5}rem` }}>
                        <span>{isArray(displayValue) ? ']' : '}'}</span>
                    </div>
                </>
            )}
        </div>
    );
};

const JsonViewer: React.FC<JsonViewerProps> = ({ data, baseData }) => {
    if (!isObject(data)) {
        return <div className="font-mono p-4 overflow-auto h-full text-xs">{String(data)}</div>;
    }

    const allKeys = [...new Set([...Object.keys(data), ...Object.keys(baseData)])];

    return (
        <div className="font-mono p-4 overflow-auto h-full text-xs">
            <div>{'{'}</div>
            {allKeys.map((key) => (
                <JsonNode key={key} nodeKey={key} value={data[key]} baseValue={baseData[key]} level={1} />
            ))}
            <div>{'}'}</div>
        </div>
    );
};

export default JsonViewer;
