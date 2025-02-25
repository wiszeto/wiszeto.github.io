import React from 'react'
// If you want to reuse the same CSS or images, import them here just like in Acc2024.
// import '../css/Acc2024.css'
// import FileStructureImage from '../media/Overarching_Design.png'
import STFO from "../media/STFO.mp4"

function Roblox() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Roblox Scripting</h1>

            {/* 
        ==================================
        Introduction
        (Copied from Acc2024.jsx)
        ==================================
      */}
            <div className="card bg-neutral text-neutral-content shadow-xl p-10 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p>
                            Roblox is a game platform that allows users to program and play games created by themselves and other users.
                            Most of the created games use a programming language called Lua, which is used mostly for gaming because it
                            is lightweight, high level, and can interface with C/C++ really well. It is also widely used in embedded systems
                            application because it is only 500kb and super fast, but I have only used it in the context of game modding.
                            Below are some scripts that I have created with Lua, mostly related to cheat development and automation scripts that
                            grind repetitive tasks in game.
                        </p>
                    </div>
                    <div>
                        {/* 
              If you want the embedded video, keep this <iframe>.
              Otherwise, you can remove the entire <div> below.
            */}
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/jUuqBZwwkQw?si=AvOvwHIIYtJbKXd0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>





            <div className="card bg-neutral text-neutral-content shadow-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                    Steal Time From Other Script
                </h2>

                {/* Use items-stretch so both columns match height if needed */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <div className="flex flex-col justify">
                        <p>
                            The concept of this game is there is a safezone and a pvp zone.
                            When you are in the pvp zone, you gain 1 time per second.
                            You have a sword and if another play kills you, they get your time.
                        </p>
                        <br />
                        <p>
                            The following script creates a radius of x around you,
                            and if another player enters the radius, it will teleport behind them and kill them.
                        </p>
                        <br />

                        <div className="collapse border border-base-300 bg-base-200 w-full">
                            {/* The checkbox toggles the collapse */}
                            <input type="checkbox" className="peer" />

                            <div className="collapse-title text-xl font-medium">
                                Source Code
                            </div>

                            <div className="collapse-content">
                                {/* Scrollable container for source code */}
                                <div className="max-h-80 overflow-y-auto">
                                    <pre className="whitespace-pre-wrap">
                                        <code>
                                            {`
local player = game.Players.LocalPlayer
local mouse = player:GetMouse()
local radius = 99999 -- Set the detection radius
local targetPlayer = nil
local spherePart = nil
local cooldowns = {} -- Table to track cooldowns for each player
local cooldownDuration = 2 -- Prevent relocking for 4 seconds
local lockTime = 1.2 -- Time to "kill" the target
local ogposition = nil
local timeThreshold = 4000000 -- Set the time threshold as a variable
local enabled = false -- Variable to track if the script is enabled

-- Create a sphere for visualization
local function createSphere()
    if not spherePart then
        spherePart = Instance.new("Part")
        spherePart.Shape = Enum.PartType.Ball
        spherePart.Size = Vector3.new(radius * 2, radius * 2, radius * 2)
        spherePart.Anchored = true
        spherePart.CanCollide = false
        spherePart.Material = Enum.Material.SmoothPlastic -- Set material to SmoothPlastic for a clean surface
        spherePart.Transparency = 0.7 -- Increase transparency for a more subtle appearance
        spherePart.Color = Color3.fromRGB(0, 255, 0) -- Green color for visibility
        spherePart.Parent = workspace
    end
end

-- Update the position of the sphere to follow the player
local function updateSpherePosition()
    if spherePart and player.Character and player.Character:FindFirstChild("HumanoidRootPart") then
        local humanoidRootPart = player.Character.HumanoidRootPart
        spherePart.Position = humanoidRootPart.Position
    end
end

-- Function to teleport the player behind the target and face them
local function teleportBehind(targetPosition, targetCFrame)
    local character = player.Character
    if character and character:FindFirstChild("HumanoidRootPart") then
        local humanoidRootPart = character.HumanoidRootPart
        local behindPosition = targetPosition - (targetCFrame.LookVector * 4) -- 4.5 studs behind the target
        humanoidRootPart.CFrame = CFrame.new(behindPosition, targetPosition)
    end
end

-- Function to unlock the current target and start cooldown for that player
local function unlockTarget(targetPlayer)
    cooldowns[targetPlayer.UserId] = true
    wait(cooldownDuration)
    cooldowns[targetPlayer.UserId] = false
end

-- Function to reset the cooldown and target detection after a "kill"
local function resetAfterKill()
    targetPlayer = nil
    for userId, _ in pairs(cooldowns) do
        cooldowns[userId] = false
    end
end

-- Function to check for players within the radius
local function checkForNearbyPlayers()
    if not enabled then return end -- Check if the script is enabled

    local character = player.Character
    if character and character:FindFirstChild("HumanoidRootPart") then
        local humanoidRootPart = character.HumanoidRootPart
        for _, otherPlayer in pairs(game.Players:GetPlayers()) do
            if otherPlayer ~= player and otherPlayer.Character and otherPlayer.Character:FindFirstChild("HumanoidRootPart") then
                local otherHumanoidRootPart = otherPlayer.Character.HumanoidRootPart
                local distance = (humanoidRootPart.Position - otherHumanoidRootPart.Position).magnitude
                
                -- Check if the player is within the radius, has Playing.Value as true, and has over the threshold Time.Value
                if distance <= radius 
                   and otherPlayer:FindFirstChild("Playing") 
                   and otherPlayer.Playing.Value == true 
                   and otherPlayer:FindFirstChild("stats") 
                   and otherPlayer.stats:FindFirstChild("Time") 
                   and otherPlayer.stats.Time.Value > timeThreshold 
                   and not cooldowns[otherPlayer.UserId] then

                   ogposition = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                   
                    targetPlayer = otherPlayer
                    
                    -- Start the attack process
                    mouse1press() -- Simulate mouse click down
                    teleportBehind(otherHumanoidRootPart.Position, otherHumanoidRootPart.CFrame)
                    wait(0.1)
                    mouse1release() -- Simulate mouse click up
                    
                    -- Wait for the lock time to "kill" the target
                    wait(lockTime)
                    unlockTarget(targetPlayer)
                    
                    -- Reset after the kill
                    resetAfterKill()
                    
                    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = ogposition
                    return
                end
            end
        end
    end
    targetPlayer = nil
end

-- Function to toggle the script on and off
local function toggleScript()
    enabled = not enabled
    if enabled then
        print("Script enabled")
    else
        print("Script disabled")
    end
end

-- Bind the toggle function to the "c" key
mouse.KeyDown:Connect(function(key)
    if key == "c" then
        toggleScript()
    end
end)

-- Continuously check for nearby players
game:GetService("RunService").Heartbeat:Connect(function()
    checkForNearbyPlayers()
    updateSpherePosition()
end)

-- Create the sphere when the script starts
createSphere()

                                            `}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-base-300 flex items-center justify-center">
                        <video controls className="rounded-lg w-full">
                            <source src={STFO} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>



            <div className="card bg-neutral text-neutral-content shadow-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                    More scripts to come
                </h2>
<p>
    I have written 50+ scripts, will add more when I have time.
</p>
            </div>

        </div>
    )
}

export default Roblox
