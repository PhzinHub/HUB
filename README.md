# HUBif game.PlaceId == 8036257748 then
    local httpSource = game:HttpGet("https://raw.githubusercontent.com/xHeptc/Kavo-UI-Library/main/source.lua")
    local Library = (loadstring or load)(httpSource)()
    local Window = Library.CreateLib("PH HUB", "Sentinel")

    local Tab = Window:NewTab("Main")
    local Section = Tab:NewSection("Main")

    Section:NewButton("Infinite Stamina", "Gives you infinite stamina.", function()
        while true do
            game.Players.LocalPlayer.Character.Humanoid.Stamina = 100
            wait(0.1)
        end
    end)

    Section:NewButton("ADMIN", "Automatically ADMIN.", function()
        while true do
            -- Farming logic here
            wait(1)
        end
    end)

    local Tab2 = Window:NewTab("Settings")
    local Section2 = Tab2:NewSection("Settings")
    Section2:NewKeybind("Toggle UI", "Toggles the user interface.", Enum.KeyCode.RightShift, function()
        Library:ToggleUI()
    end)
else
    print("This script is only for the game with PlaceId 8036257748.")
end
Gamepasses = {
    ["Double Cash"] = 12345678,
    ["VIP Access"] = 87654321,
    ["Admin Pass"] = 11223344
}Admin Pass"] = 11223344
}
