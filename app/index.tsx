import "../global.css";
import { Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/hooks";

export default function App() {
    const { isDark, toggleTheme, themeMode } = useTheme();

    return (
        <View className="flex-1 items-center justify-center bg-background-primary">
            <View className="bg-background-secondary p-8 rounded-card-lg shadow-card m-4">
                <Text className="text-3xl font-bold text-text-primary mb-2">
                    Remembrall v2
                </Text>
                <Text className="text-lg text-text-secondary mb-6 text-center">
                    Custom Theme System Demo
                </Text>
                
                <View className="space-y-4">
                    <View className="bg-primary-50 p-4 rounded-md border border-primary-200">
                        <Text className="text-primary-800 font-medium">
                            Current theme: {isDark ? 'Dark' : 'Light'} ({themeMode})
                        </Text>
                    </View>

                    <TouchableOpacity 
                        onPress={toggleTheme}
                        className="bg-primary-500 px-6 py-3 rounded-button-md shadow-sm"
                    >
                        <Text className="text-white font-semibold text-center">
                            Toggle Theme
                        </Text>
                    </TouchableOpacity>

                    <View className="flex-row space-x-2">
                        <View className="flex-1 bg-success-100 p-3 rounded-md border border-success-200">
                            <Text className="text-success-800 text-sm font-medium text-center">
                                Success
                            </Text>
                        </View>
                        <View className="flex-1 bg-warning-100 p-3 rounded-md border border-warning-200">
                            <Text className="text-warning-800 text-sm font-medium text-center">
                                Warning
                            </Text>
                        </View>
                        <View className="flex-1 bg-error-100 p-3 rounded-md border border-error-200">
                            <Text className="text-error-800 text-sm font-medium text-center">
                                Error
                            </Text>
                        </View>
                    </View>

                    <View className="bg-background-tertiary p-4 rounded-md">
                        <Text className="text-text-muted text-sm text-center">
                            Theme system includes colors, typography, spacing, shadows, animations and more!
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}