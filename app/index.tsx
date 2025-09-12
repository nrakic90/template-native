import "../global.css";
import { Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/hooks";

export default function App() {
    const { isDark, toggleTheme, themeMode } = useTheme();

    return (
        <View className={`flex-1 items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <View className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-8 rounded-lg shadow-lg m-4`}>
                <Text className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                    Remembrall v2
                </Text>
                <Text className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6 text-center`}>
                    No dark: prefixes needed!
                </Text>
                
                <View className="space-y-4">
                    <View className="bg-primary-50 p-4 rounded-md border border-primary-200">
                        <Text className="text-primary-800 font-medium">
                            Current theme: {isDark ? 'Dark' : 'Light'} ({themeMode})
                        </Text>
                    </View>

                    <TouchableOpacity 
                        onPress={toggleTheme}
                        className="bg-primary-500 active:bg-primary-600 px-6 py-3 rounded-md"
                    >
                        <Text className="text-white font-semibold text-center">
                            Toggle Theme
                        </Text>
                    </TouchableOpacity>

                    {/* Approach 2: Use brand colors that work in both themes */}
                    <View className="flex-row space-x-2">
                        <View className="flex-1 bg-success-500 p-3 rounded-md">
                            <Text className="text-white text-sm font-medium text-center">
                                Success
                            </Text>
                        </View>
                        <View className="flex-1 bg-warning-500 p-3 rounded-md">
                            <Text className="text-white text-sm font-medium text-center">
                                Warning
                            </Text>
                        </View>
                        <View className="flex-1 bg-error-500 p-3 rounded-md">
                            <Text className="text-white text-sm font-medium text-center">
                                Error
                            </Text>
                        </View>
                    </View>

                    {/* Approach 3: Only use dark: when you need different colors */}
                    <View className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                        <Text className="text-gray-600 dark:text-gray-300 text-sm text-center">
                            Use dark: only when light/dark need different colors
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}