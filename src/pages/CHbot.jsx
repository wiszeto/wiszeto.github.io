import React from 'react'
// If you want to reuse the same CSS or images, import them here just like in Acc2024.
// import '../css/Acc2024.css'
// import FileStructureImage from '../media/Overarching_Design.png'
import STFO from "../media/STFO.mp4"

function CHbot() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Course Hero Bot</h1>

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
                            Course Hero Bot is my first big and successful project that I built in 2021 with only cs 101 knowledge.
                            Course Hero is a homework sharing website where students upload and share homework. In order to access 
                            other students homework, you had to upload x amount of your own homework to access x amount of other homework. In true engineering fashion, 
                            I built a bot that automatically creates fake homework in docx/pdf format for you to upload to course hero.
                            It started in a small discord server and kept growing naturally, reaching over 200k+ students and generating
                            over 25 million files. Of course, as more and more fake files got on the course hero website, detection for legit homework 
                            got stronger and stronger, and I had to write multiple patches. With how advance their detection got, and many competing 
                            bots, I decided to end the project in 2024. This project really showed me the power of programming, giving paywalled 
                            study resources to 200k+ students around the world.
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
                                src="https://www.youtube.com/embed/0Nf_HmQ5zVM?si=jM9eLtFTBrwbs9rQ"
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
                    Source Code
                </h2>


                    <div className="flex flex-col justify">
                        <p>
Planning to add a block diagram later. There is also multiple iterations of this but this is the very first one. This was mostly for private use, was never code reviewed.
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
##################################################
## Generates documents with random text.
##################################################
## Author: Wilson Szeto
## Creation Date: June 10, 2021
## Maintainer: Wilson Szeto
## Email: wiszeto@calpoly.edu
## Status: mostly complete
##################################################
## Libaries
import discord
from discord import ui, app_commands
from discord.ui import Button, View
from discord.ext import commands
from datetime import datetime
from discord.utils import get
import random
import time
import zipfile
###################################################
## Source

guild_id = xxxx
total_gen_channel_id = xxxx
file_gen_2_chan_id = xxxx
class File_Generation():
    def __init__(self, number_of_files, class_name):
        self.number_of_files = number_of_files
        self.class_name = class_name
        if self.class_name == None:
            class_name = random.choice([
                'ACC', 'ANT', 'ARCH', 'ART', 'ASTR', 'BIO', 'BMED', 'CHEM', 'CPE',
                'CS', 'CSC', 'DANC', 'ECO', 'EE', 'ENGL', 'ENVI', 'FASH', 'FILM',
                'FIN', 'GEO', 'HIST', 'JAP', 'JOUR', 'LAT', 'LAW', 'MED', 'MU', 'NERO',
                'NURS', 'PHAR', 'PHIL', 'PHYS', 'PSY', 'POLS', 'SOC', 'SOCI', 'STAT',
                'URBN', 'GEO', 'MATH', 'WGS', 'AERO', 'ECON', 'COMS', 'UNIV', 'EDU'
            ]) + str(random.randint(100, 350))
            self.class_name = class_name
        else:
            self.class_name = class_name
        
    def major_assignment_type():
        """This method will generate a string in the form of _assignment_number. i.e. _doc_8, _Answer_3, _HW_6
        Args:
            None
        Returns:
            str: A string in the form of _assignment_number. i.e. _doc_8, _Answer_3, _HW_6
        """
        seperator = random.choice(['-', '_'])
        assignment = random.choice([
            'Test',
            'Assignment',
            'doc',
            'Document',
            'Midterm',
            'Worksheet',
            'Review',
            'Quiz',
            'Lab',
            f'Lab{seperator}Report',
            'Report',
            f'Study{seperator}Guide',
            'Notes',
            f'lec{seperator}notes',
            f'Lecture{seperator}Notes',
            f'Group{seperator}Assignment',
            'Lecture',
            f'Progress{seperator}Report',
            'Essay',
            'Soultions',
            'demo',
            'Demonstration',
            'info',
            'Infomation',
            'Response',
            'Exercise',
            'Module',
            'Practice',
            'Assessment',
            f'Homework{seperator}Help',
            f'{seperator}Lesson{seperator}Plan',
            f'Test{seperator}Prep',
            'Final',
            'Week',
            'Handout',
            'Topic',
            'Exam',
            'Problem',
            'Problems',
            f'Practice{seperator}Problems',
            'Summary',
            f'Chapter{seperator}Summary',
            'Research',
            'Questions',
            'Chapter',
            'Powerpoint',
            'Paper',
            f'Cheat{seperator}Sheet',
            'Image',
            f'Pre{seperator}Lab',
            'Presentation',
            'Slides',
            f'Extra{seperator}Credit',
            'HW',
            'Answers',
            'Answer',
            'Analysis',
            'Example',
            'Pset',
            'Diagram',
            'Sheet',
            f'Answer{seperator}Key',
        ])
        return seperator + assignment + seperator + str(random.randint(1, 10))

    def gen_docf(self):
        """This function will combine 3 random word documents from the directory doc0 into one and will put it in a zip file.
        Number of files generated will be based on the amount given.
        Args:
            self.number_of_files (int): The amount of files to generate.
        Returns:
            none
        """
        for i in range(self.number_of_files):
            with open(f'output\\document{i}.docx', 'w') as t:
                files = 3815 #number of files in doc0 directory
                x = random.randint(0, files)
                y = random.randint(0, files)
                z = random.randint(0, files)
                with open(f"doc0\\d{x}.docx", "r") as r:
                    with open(f"doc0\\d{y}.docx", "r") as s:
                        with open(f"doc0\\d{z}.docx", "r") as h:
                            content = r.read() + "\n\n" + s.read(
                            ) + "\n\n" + h.read()
                            t.write(content)

        zip_file = zipfile.ZipFile('docs.zip', 'w')
        norepeat = []
        for doc in range(self.number_of_files):
            assign_string = File_Generation.major_assignment_type()
            for used_string in norepeat:
                if used_string == assign_string:
                    assign_string = File_Generation.major_assignment_type() + str(random.randint(1, 1000))
            norepeat.append(assign_string)
            
            zip_file.write(f'output\\document{doc}.docx',
                        arcname=f"{self.class_name}{assign_string}.txt",
                        compress_type=zipfile.ZIP_DEFLATED)
        zip_file.close()


## Discord Intergration
intents = discord.Intents.all()
client = commands.Bot(command_prefix="!", intents=intents)


@client.event
async def on_ready(): #Bot setup
    print('Bot is ready.')
    guild = client.get_guild(guild_id)
    channel = discord.utils.get(guild.text_channels, id = file_gen_2_chan_id)
    try:
        message = await channel.fetch_message(channel.last_message_id)
        await message.delete()
        await channel.send("yo")
    except:
        await channel.send("yo")




@client.command()
async def ping(ctx): #ping for latency, !ping
    await ctx.send(f'Pong! {round(client.latency * 1000)}ms')


@client.command()
async def servers(ctx): #returns list of servers the bot is in, !servers
    activeservers = client.guilds
    for guild in activeservers:
        print(guild.name)
        print(guild.owner_id)
        """ other information about server
        print(guild.member_count)
        print(guild.name)
        print(guild.text_channels)
        print(guild.id)
        """


@client.command()
async def f(ctx, number_of_files: int, class_name: str=None):
    #await ctx.send(f'{ctx.author.mention} Your request is being generated. Servers are slow right now so it will take longer than usual. (12-20 seconds) Thank you for your patience.')
    if number_of_files > 50:
        await ctx.send('You can not generate more than 50 files.')
    if number_of_files < 0:
        await ctx.send('You can not generate less than 0 files.')
    if number_of_files <= 50 and number_of_files > 0:
        if number_of_files == 1:
            File_Generation.gen_docf(1, class_name)
            await ctx.send(
                f'Generation time: Very Fast \nTotal files Generated!: {1}',
                file=discord.File('output//document0.docx'))
            return True
        else:
            start = time.time()
            c = File_Generation(number_of_files, class_name)
            try:
                File_Generation.gen_docf(c)
            except:
                try:
                    File_Generation.gen_docf(c)
                except:
                    try:
                        File_Generation.gen_docf(c)
                    except:
                        print('error')
            file = discord.File('docs.zip')
            channel = discord.utils.get(ctx.guild.text_channels, id = total_gen_channel_id)
            message = await channel.fetch_message(channel.last_message_id)
            await channel.send(
                f'{int(message.content) + int(number_of_files)}',
                file=discord.File('docs.zip'))
            message = await channel.fetch_message(channel.last_message_id)
            url = message.attachments[0]
            end = time.time()
            embed = discord.Embed(
                title=f"Documents Generated! | {number_of_files} docs",
                description=
                f'Generation time: {round(client.latency * 1000) + round((end - start)*1000)}ms \nTotal files Generated!: {int(message.content) + int(number_of_files)}\nClass: {c.class_name}',
                color=0x5AACE8)
            #embed.set_thumbnail(url='https://cdn.discordapp.com/attachments/xxxxxx/check-mark-animated-gif-12.gif')
            embed.add_field(name="Files ✅",
                            value=f"[Download here!]({url})",
                            inline=True)
            embed.add_field(
                name="Invite this bot to your server!",
                value="Max capacity reached. Will open in the future!", inline=True)
                #"[Invite here!](https://discord.com/api/oauth2/authorize?client_id=xxxxxx&permissions=2147740737&scope=bot)",
            embed.set_footer(
                text=
                "Made by willievibes︙https://discord.gg/xxxx︙Have a great day!"
            )
            await ctx.send(embed=embed)















class MyButton(Button):
    def __init__(self, label, style, emoji = None, url = None):
        super().__init__(label = label, style = style, emoji = emoji, url = url)

    async def callback(self, interaction):
        print(self.label + " clicked")
        if self.label == "Generate":
          await interaction.response.send_modal(file_modal())
        if self.label == "Feedback":
          await interaction.response.send_message("1 clicked!", ephemeral=True)
        

class file_modal(ui.Modal, title = "File Gen 2.0"):
    amount = ui.TextInput(label = "Number of files to generate", style = discord.TextStyle.short, placeholder="Enter a number less than 100", required=True, max_length = 2)
    type = ui.TextInput(label="Enter a class", style = discord.TextStyle.short, placeholder="i.e. EE 228, MATH 350, BIO 101")

    async def on_submit(self, interaction: discord.Interaction):

        if self.amount == 1:
            File_Generation.gen_docf(1, self.type)
            await interaction.response.send_message(
                f'Generation time: Very Fast \nTotal files Generated!: {1}',
                file=discord.File('output//document0.docx'), ephemeral = True)
            return True
        else:
            start = time.time()
            c = File_Generation(self.amount, self.type)
            try:
                File_Generation.gen_docf(c)
            except:
                try:
                    File_Generation.gen_docf(c)
                except:
                    try:
                        File_Generation.gen_docf(c)
                    except:
                        print('error')
            file = discord.File('docs.zip')
            channel = discord.utils.get(interaction.guild.text_channels, id = total_gen_channel_id)
            message = await channel.fetch_message(channel.last_message_id)
            await channel.send(
                f'{int(message.content) + int(str(self.amount))}',
                file=discord.File('docs.zip'))
            message = await channel.fetch_message(channel.last_message_id)
            url = message.attachments[0]
            end = time.time()

        embed = discord.Embed(title=f"Files Generated!", timestamp = datetime.now(), color = discord.Color.blue())
        embed.set_author(name = interaction.user, icon_url=interaction.user.avatar)
        embed.add_field(name = f"Amount:", value = f"{self.amount}", inline = True)
        embed.add_field(name = "Class:", value = f"{self.type}", inline = True)
        embed.add_field(name = "Download Here:", value = f"[Download here!]({url})", inline = False)
        
        await interaction.response.send_message(embed = embed, ephemeral =True)



@client.command()
async def file_gen(ctx):
    #embed part of help message
    embed=discord.Embed(title="Welcome to file gen 2.0!(BETA)", description= "Choose the amount of files you would like to generate!", color=0x00ffee)
    embed.add_field(name = "file gen 2.0", value = f"currently in BETA", inline = True)
    embed.add_field(name = f"Offical discord server link:", value = "https://discord.gg/xxxx", inline = True)
    embed.add_field(name = "How to use bot:", value = f"1. Click the amount of files you want.\n2. Download the files and extract them.\n3. Go to https://coursehero.com/upload \n4. Drag and drop files onto site \n5. Choose classes and wait for approval!", inline = False)
    

    generate = MyButton("Generate", discord.ButtonStyle.blurple)
    feedback = MyButton("Feedback", discord.ButtonStyle.green)

    view = View(timeout = 999999999) 

    view.add_item(generate)
    view.add_item(feedback)




    generate.callback(generate)
    feedback.callback(feedback)

    
    await ctx.send(embed=embed, view = view)

client.run("")



                                            `}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>



        </div>
    )
}

export default CHbot
